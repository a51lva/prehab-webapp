import React, {Component} from 'react';
import PlanForm from './planForm'
import {connect} from "react-redux";
import {getTaskList} from "../../utils/communication-manager";
import Logout from "../Logout/logout";

class Plan extends Component {

    constructor(props){
        super(props);
        this.state = {
            taskList: undefined
        }

    }

    createActivityPlan = () => {
        if(this.props.auth === true && this.state.taskList !== undefined) {
            return (
                <div className="row">
                    <PlanForm list={this.state.taskList}/>
                </div>
            )
        }
        else
        {
            return (
                <Logout />
            )
        }
    }
    componentDidMount() {
        getTaskList().then(list => {
            this.setState({
                taskList: list.data
            });
        }).catch(err => {
            this.setState({
                taskList: undefined
            });
        });
        this.createActivityPlan();
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.taskList === undefined && nextProps.auth) {
            this.createActivityPlan();
        }
    }



    render() {
        return (
            <div >
                {this.createActivityPlan()}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth.isLoggedIn
    };
};

export default connect(mapStateToProps, null)(Plan);
