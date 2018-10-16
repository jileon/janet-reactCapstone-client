import React from 'react';
import {connect } from 'react-redux';
import axios from 'axios';
import {SERVER} from '../config'

export class SearchApp extends React.Component {
    state = {
      data: [],
      currentPage: 0,
      count: 0,
      offset: 10
    };
  
    componentWillMount() {
        axios({
            method: 'get',
            url: `${SERVER}/api/newsflash/search`,
            params: {
             searchTerm: 'brexit',
            }
          })
        .then(response => response.data)
        .then(json => {
          this.setState({
            data: json.articles,
            count: json.articles.length
          });
        });

    // fetch("https://jsonplaceholder.typicode.com/albums")
    // .then(response => response.json())
    // .then(json => {
    //   this.setState({
    //     data: json,
    //     count: json.length
    //   });
    // });
    }
  
    changePage = n => {
      this.setState({
        currentPage: n
      });
    };
    render() {
      //e
      const { data, offset, currentPage, count } = this.state;
      const start = currentPage * offset;
      const end =  (+currentPage+1) * offset;
      console.log(data)
      return (
        <div>
          <ul>
            {data.length && data.slice(start,end).map((item, i) => {
                return <li className="comment" key={i}>{`${item.title}`}</li>;
              })}
          </ul>
          <Pagination
            pages={Math.ceil(count / offset)}
            current={currentPage}
            onChangePage={this.changePage}
            margin={5}
          />
        </div>
      );
    }
  }
  const mapStateToProps = state => {
    return {
        search: state.search.searchTerm
    
    };
  };
  export default connect(mapStateToProps)(SearchApp);
  export class Pagination extends React.Component {
    onChangePage = e => {
      const id = e.target.dataset.page;
      this.props.onChangePage(id);
    };
    render() {
      const { pages, current,margin } = this.props;
      let a = [];
      for (let i = 0; i < pages; i++) {
        a.push(
          <li
            data-page={i}
            onClick={this.onChangePage}
            key={i}
            className={"item" + (i == current ? " active" : "")}
          >
            {i}
          </li>
        );
      }
      a.unshift(<li
            data-page='back'
            onClick={this.onChangePage}
            key={9090}
            className={"item"}
          >-
            
          </li>);
      a.push(<li
            data-page='front'
            onClick={this.onChangePage}
            key={90190}
            className={"item"}
          >+
            
          </li>)
      
      return <ul className="pagi">{a}</ul>;
    }
  }

  