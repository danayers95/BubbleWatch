import React from 'react';
import nodes from '../exampleData.json'

export default class Bubble extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        IDsInBubble: []
      };
    }
    render() {
      return (
        <div className="container">
            <div className="row text-center">
                <Node id="1"
                    name="Dan"
                    status="safe"
                    statusMessage=""
                    data={nodes}
                />
            </div>
        </div>


      );
    }
  }

  class NodeRow extends React.Component{
    constructor(props) {
        super(props);
      }
      render() {

        var nodes = this.props.data.map(rowNode => 
            <Node id={rowNode.id}
                    key={rowNode.id}
                    name={rowNode.name}
                    status={rowNode.status}
                    statusMessage={rowNode.statusMessage}
                    data={[]}
                />
        );

        return (
            <div className="row text-center">
                {nodes}
            </div>
        );
      }
  }


  class Node extends React.Component{
    constructor(props) {
        super(props);
      }
      render() {
        return (
            <div className="col-sm">
                <div className={this.props.status=="safe" 
                    ? "text-success" 
                    : (this.props.status=="unsafe" 
                        ? "text-danger" :"text-warning") } >
                    <div className="UserIcon mx-auto bg-secondary" 
                        style={{backgroundImage:"url(../../logo192.png)"}}/>
                    <h2>{this.props.name}</h2>
                </div>
                <NodeRow data={this.props.data} />
            </div>
        );
      }
  }