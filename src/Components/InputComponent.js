import React, {Component} from 'react';
import '../App.css'

class InputComponent extends Component {
    render() {

        const {item, handleChange, handleSubmit, editMode} = this.props;
        return (
            <div className={'card card-body my-3'}>
                <form onSubmit={handleSubmit}>
                    <div className={'input-group'}>
                        <input
                            type={'text'}
                            className={'form-control text-capitalize'}
                            placeholder={'Add ToDo here..'}
                            value={item}
                            onChange={handleChange}
                        />
                    </div>
                    <button
                        className={
                            editMode ? 'btn btn-success btn-block btn round my-3 text-capitalize':'btn btn-primary btn-block btn round my-3 text-capitalize'
                        }
                        type={'submit'}
                        disabled={item === ''}
                    >
                        {
                            editMode ? 'update item': 'add new item'
                        }

                    </button>
                </form>
            </div>
        );
    }
}

export default InputComponent;
