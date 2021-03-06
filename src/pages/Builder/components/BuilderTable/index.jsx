import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import DataBinder from '@icedesign/data-binder';
import { Radio } from '@alifd/next';
import CustomTable from '../../../../components/CustomTable';
import TableFilter from '../TableFilter';
import { delCategory, categoryList } from '../../../../api/adminUrl';
import { postServer, getServer, hashUrl } from '../../../../api';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

@withRouter
@DataBinder({
  findList: {
    url: hashUrl(categoryList),
    method: 'post',
    params: {
      page: 0,
      size: 10,
    },
  },
})
export default class BuilderTable extends Component {

  static displayName = 'BuilderTable';
  
  //参数初始化
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  static defaultProps = {};

  state = {
    isLoading: false,
    data: [],
    activeIndex: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      filterFormValue: {},
    }
  }

  //生命周期函数 - 页面加载完成后执行
  componentDidMount() {
    this.fetchData();
  }

  //跳页函数
  jumpToPage = (page) => {
    const { history } = this.props
    history.push(page)
  }

  //删除警告
  refuseExtractionConfirm = (id) => {
    Dialog.confirm({
      content: "确定要删除该分类信息吗？",
      title: "警告",
      locale: {
        ok: "确认",
        cancel: "取消"
      },
      onOk: () => this.refuseExtraction(id)
    });
  }

  //删除接口调用
  async refuseExtraction(id) {
    const that = this
    let params = {state: "ACTIVE"};
    let res = await postServer(delCategory + '/' + id, params)
    let data = res.data;
    if (data) {
      if (data.code === 10000) {
        Feedback.toast.success(data.msg);
        setTimeout(() => that.fetchData(), 1000);
      } else {
        Feedback.toast.error(data.msg);
        setTimeout(() => that.fetchData(), 1000);
      }
    }
  }

  //获取数据
  fetchData = async (data) => {
    let filterFormValue = { ...this.state.filterFormValue };
    Object.keys(filterFormValue).forEach(function(key){
      if (filterFormValue[key] === "")  filterFormValue[key] = undefined;
    });
    let param = data ? { ...data, ...filterFormValue } : filterFormValue;
    this.props.updateBindingData('findList', { 
      url: hashUrl(categoryList),
      params: param 
    });
  };

  changePage = (currentPage) => {
    this.fetchData({ page: currentPage });
  };

  filterFormChange = (value) => {
    this.setState({
      filterFormValue: value,
    });
  };

  filterTable = (filterFormValue) => {
    console.log(filterFormValue);
    this.fetchData({
      ...filterFormValue,
    });
  };

  columnsConfig = () => {
    return [
      {
        title: '构建对象',
        dataIndex: 'builder',
        key: 'builder',
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: '责任人',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '最后执行时间',
        dataIndex: 'executionTime',
        key: 'executionTime',
      },
      {
        title: '正式版本',
        dataIndex: 'officialVersion',
        key: 'officialVersion',
      },
      {
        title: '灰度版本',
        dataIndex: 'grayVersion',
        key: 'grayVersion',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state'
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail'
      },
    ];
  };

  render() {
    const { isLoading, data, activeIndex } = this.state;
    const buttonGroup = [
      {
        text: '已发布',
        lenght: '10',
      },
      {
        text: '开发中',
        lenght: '3',
      },
      {
        text: '我的',
        lenght: '8',
      },
    ];

    let content;
    const  { findList } = this.props.bindingData;
    if (findList) {
      content = findList.content;
    }
    if (!content) content = [{}];

    return (
      <IceContainer>
        <div className={styles.tableHead}>
          <div className={styles.tableTitle}>构建器</div>
          <Radio.Group
            shape="button"
            value={activeIndex}
          >
            {buttonGroup.map((item, index) => {
              return (
                <Radio
                  type="secondary"
                  key={`button-${index}`}
                  value={item.lenght}
                >
                  {item.text}
                </Radio>
              );
            })}
          </Radio.Group>
        </div>
        <TableFilter handleSubmit={this.filterTable} />
        <CustomTable
          columns={this.columnsConfig()}
          dataSource={data}
          isLoading={isLoading}
          onChange={this.changePage}
        />
      </IceContainer>
    );
  }
}


