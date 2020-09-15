import React, {Component} from 'react';
import ItemComponent from "./ItemComponent";
import '../App.css'

class ListComponent extends Component {
    render() {
        const {Items, clearList, handleDelete, handleEdit, handleComplete} = this.props;
        return (
            <ul className={'list-group my-3'}>
                <h3
                    className={'title02 text-capitalize text-center'}
                >
                    ToDo List
                </h3>
                {
                    Items.map(item => {
                        return(
                            <ItemComponent
                                key={item.id}
                                data={item.data}
                                handleDelete={()=> handleDelete(item.id)}
                                handleEdit={()=> handleEdit(item.id)}
                                handleComplete={()=> handleComplete(item.id)}
                                done={item.done}
                            />
                        )
                    })
                }
                <button
                    type={'button'}
                    className={'btn btn-danger btn-round btn-block text-capitalize my-3'}
                    onClick={clearList}
                >
                    Clear All <img
                    src={'https://image.flaticon.com/icons/svg/1345/1345874.svg'}
                    alt={'deleteLogo'}
                    className={'imageButton img-responsive'}
                />
                </button>
            </ul>
        );
    }
}

export default ListComponent;
