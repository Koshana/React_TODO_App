import React, {Component} from 'react';
import InputComponent from "./Components/InputComponent";
import ListComponent from "./Components/ListComponent";
import './App.css'

import uuid from 'uuid'; //To generate unique ids

class App extends Component {

    constructor(props) {
        super(props);

        this.state={
            Items:[],
            id: uuid(),
            item:'',
            editMode: false,
            done:false
        }
    }

    //React to changes in input field in InputComponent
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    //React to Form submission in InputComponent
    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id:this.state.id,
            data: this.state.item,
            done:false
        }

        //Push newly created item to Items array
        const updatedItems = [newItem,...this.state.Items];

        this.setState({
            Items:updatedItems,
            item:'',
            id:uuid(),
            editMode:false,
            done:false
        });

    }

    //Clear all the items in the Array
    clearList = () => {
        this.setState({
            Items:[]
        });
    }

    //Delete specific item from the Items array
    handleDelete = (id) => {

        const sortedItems = this.state.Items.filter(item => item.id !== id);

        this.setState({
            Items:sortedItems
        });
    }

    //Edit specific item
    handleEdit = (id) => {

        const filteredItems = this.state.Items.filter(item => item.id !== id); //Sort items and remove matching item from the array

        const selectedItem = this.state.Items.find(item => item.id === id); //select specific item from the array
        this.setState({
            Items:filteredItems,
            item: selectedItem.data,
            editMode: true,
            id:id,
            done:false
        });
    }

    //Perform Complete action
    handleComplete = (id) => {

        this.setState({
            Items: this.state.Items.map(item => {
                if (item.id === id){
                    item.done = !item.done
                }
                return item;
            })
        })
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-xl-12 mx-auto mt-4'}>
                        <h1
                            className={'title01 text-capitalize text-center'}
                        >
                            ToDo Application
                        </h1>
                        <br/>
                        <hr/>
                        <InputComponent
                            item={this.state.item} //value of input field
                            handleChange={this.handleChange} //react to changes of input field
                            handleSubmit={this.handleSubmit} //handle the submit of form
                            editMode={this.state.editMode} //Pass editMode value
                        />
                        <ListComponent
                            Items={this.state.Items} //display the Items in array
                            clearList={this.clearList} //Delete all items in Items array
                            handleDelete={this.handleDelete} //Delete specific items in the array
                            handleEdit={this.handleEdit} //Delete specific item from array
                            handleComplete={this.handleComplete} //Complete specific task
                            done={this.state.done} //Pass done value
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
