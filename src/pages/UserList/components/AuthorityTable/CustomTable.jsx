import React, { Component } from 'react';
import { Table, Pagination, Balloon, Icon } from '@icedesign/base';
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

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      id: index + 1,
      orderID: `12022123${index}`,
      name: '张一峰',
      title: '主治医师',
      date: `2018-06-${index + 1}`,
      endDate: `2018-06-${index + 1}`,
      validData: `2018-06-${index + 1}`,
      category: '皮肤科',
      state: '已审核',
      approver: '刘建明',
      approvalData: `2018-06-${index + 1}`,
    };
  });
};

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
export default class Home extends Component {
  static displayName = 'Home';

  static displayName = 'BuilderTable';

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

  componentDidMount() {
    this.fetchData();
  }

  jumpToPage = (page) => {
    const { history } = this.props
    history.push(page)
  }

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

  fetchData = async (data) => {
    let filterFormValue = { ...this.state.filterFormValue };
    Object.keys(filterFormValue).forEach(function(key){
      if (filterFormValue[key] === "")  filterFormValue[key] = undefined;
 });
    let param = data ? { ...data, ...filterFormValue } : filterFormValue;
    this.props.updateBindingData('findList', { 
      url: hashUrl(categoryList),
      data: param 
    });
  };

  changePage = (currentPage) => {
    this.fetchData({ page: currentPage - 1 });
  };

  filterFormChange = (value) => {
    this.setState({
      filterFormValue: value,
    });
  };

  filterTable = () => {
    console.log(this.state.filterFormValue);
    this.fetchData({
      ...this.state.filterFormValue,
    });
  };

  handlePagination = (current) => {
    this.setState({
      current,
    });
  };

  handleSort = (dataIndex, order) => {
    const dataSource = this.state.dataSource.sort((a, b) => {
      const result = a[dataIndex] - b[dataIndex];
      if (order === 'asc') {
        return result > 0 ? 1 : -1;
      }
      return result > 0 ? -1 : 1;
    });

    this.setState({
      dataSource,
    });
  };

  renderCatrgory = (value) => {
    return (
      <Balloon
        align="lt"
        trigger={<div style={{ margin: '5px' }}>{value}</div>}
        closable={false}
        style={{ lineHeight: '24px' }}
      >
        皮肤科属于外科，主要治疗各种皮肤病，常见皮肤病有牛皮癣 、 疱疹
        、酒渣鼻等
      </Balloon>
    );
  };

  renderState = (value) => {
    return (
      <div style={styles.state}>
        <span style={styles.circle} />
        <span style={styles.stateText}>{value}</span>
      </div>
    );
  };

  renderOper = () => {
    return (
      <div style={styles.oper}>
        <Icon type="edit" size="small" style={styles.editIcon} />
      </div>
    );
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div style={styles.tableContainer}>
        <Table
          dataSource={dataSource}
          onSort={this.handleSort}
          hasBorder={false}
          className="custom-table"
        >
          <Table.Column
            width={100}
            lock="left"
            title="序列号"
            dataIndex="id"
            sortable
            align="center"
          />
          <Table.Column width={100} title="单号" dataIndex="orderID" sortable />
          <Table.Column width={100} title="名称" dataIndex="name" />
          <Table.Column width={100} title="职称" dataIndex="title" />
          <Table.Column width={200} title="入职日期" dataIndex="date" />
          <Table.Column width={200} title="实习结束日期" dataIndex="endDate" />
          <Table.Column
            width={200}
            title="转正生效日期"
            dataIndex="validData"
          />
          <Table.Column
            width={200}
            title="科室"
            dataIndex="category"
            cell={this.renderCatrgory}
          />
          <Table.Column
            width={200}
            title="状态"
            dataIndex="state"
            cell={this.renderState}
          />
          <Table.Column width={200} title="审核人" dataIndex="approver" />
          <Table.Column width={200} title="审核日期" dataIndex="approvalData" />
          <Table.Column
            width={100}
            title="操作"
            cell={this.renderOper}
            lock="right"
            align="center"
          />
        </Table>
        <Pagination
          style={styles.pagination}
          current={this.state.current}
          onChange={this.handlePagination}
        />
      </div>
    );
  }
}

const styles = {
  tableContainer: {
    background: '#fff',
    paddingBottom: '10px',
  },
  pagination: {
    margin: '20px 0',
    textAlign: 'center',
  },
  editIcon: {
    color: '#999',
    cursor: 'pointer',
  },
  circle: {
    display: 'inline-block',
    background: '#28a745',
    width: '8px',
    height: '8px',
    borderRadius: '50px',
    marginRight: '4px',
  },
  stateText: {
    color: '#28a745',
  },
};
