import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Pagination, Grid } from '@icedesign/base';
import SingleItem from './SingleItem';
import DataBinder from '@icedesign/data-binder';
import { delCategory, categoryList } from '../../../../api/adminUrl';
import { postServer, getServer, hashUrl } from '../../../../api';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2GiVsdS0mpuFjSZPiXXbssVXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2bxHGtpXXXXXVXXXXXXXXXXXX_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2bEcHnXXXXXbgXXXXXXXXXXXX_!!120976213.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i2/TB11DjAIFXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2GiVsdS0mpuFjSZPiXXbssVXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2bxHGtpXXXXXVXXXXXXXXXXXX_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2bEcHnXXXXXbgXXXXXXXXXXXX_!!120976213.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i2/TB11DjAIFXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2GiVsdS0mpuFjSZPiXXbssVXa_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i3/120976213/TB2bxHGtpXXXXXVXXXXXXXXXXXX_!!120976213.jpg_240x240.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/120976213/TB2bEcHnXXXXXbgXXXXXXXXXXXX_!!120976213.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i2/TB11DjAIFXXXXaTXFXXXXXXXXXX_!!0-item_pic.jpg_100x100.jpg',
  },
  {
    title: '衬衫女雪纺上衣2017大纺上衣2017大纺上衣2017大',
    extra: '预计佣金 ¥10',
    price: '¥89',
    image:
      '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
  },
];

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
export default class PictureTextList extends Component {
  
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

  renderItem = (item, index) => {
    return (
      <Col xxs={12} s={12} m={8} l={6} key={index}>
        <SingleItem {...item} />
      </Col>
    );
  };

  renderItemRow = () => {
    return <div style={styles.row}>{dataSource.map(this.renderItem)}</div>;
  };

  render() {
    let content;
    const  { findList } = this.props.bindingData;
    if (findList) {
      content = findList.content;
    }
    if (!content) content = [{}];
    
    return (
      <div className="picture-text-list">
        <IceContainer style={styles.card}>
          <Row wrap gutter={20}>
            {dataSource.map(this.renderItem)}
          </Row>
          <div style={styles.paginationContainer}>
            <Pagination />
          </div>
        </IceContainer>
      </div>
    );
  }
}

const styles = {
  row: {
    margin: '0 10px 10px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardStyle: {
    display: 'flex',
    margin: '20px',
    padding: '0 30px',
  },
  card: {
    padding: '20px 10px',
  },
  paginationContainer: {
    marginTop: '25px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};
