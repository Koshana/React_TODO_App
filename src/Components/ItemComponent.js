import React, {Component} from 'react';
import '../App.css'

class ItemComponent extends Component {
    render() {

        const {data, handleDelete, handleEdit, handleComplete,done} = this.props;
        return (
            <li
                className={'list-group-item text-capitalize d-flex justify-content-between '}
            >
                <h4
                    className={
                        done ? 'done':'notDone'
                    }
                >
                    {data}
                </h4>
                <div className={'todo-icon'}>
                    <button
                        type={'button'}
                        className={'btn btn-primary btn-round btn-block'}
                        onClick={handleComplete}
                        disabled={
                            !!done
                        }
                    >
                        <img
                            src={'https://image.flaticon.com/icons/svg/1442/1442912.svg'}
                            alt={'doneLogo'}
                            className={'imageButton2'}
                        />
                    </button>
                    <button
                        type={'button'}
                        className={'btn btn-warning btn-round btn-block'}
                        onClick={handleEdit}
                        disabled={
                            !!done
                        }
                    >
                        <img
                            src={'https://image.flaticon.com/icons/svg/1159/1159876.svg'}
                            alt={'editLogo'}
                            className={'imageButton2'}
                        />
                    </button>
                    <button
                        type={'button'}
                        className={'btn btn-danger btn-round btn-block'}
                        onClick={handleDelete}
                    >
                        <img
                            src={'https://image.flaticon.com/icons/svg/1345/1345823.svg'}
                            alt={'deleteLogo'}
                            className={'imageButton2'}
                        />
                    </button>
                </div>
            </li>
        );
    }
}

export default ItemComponent;
