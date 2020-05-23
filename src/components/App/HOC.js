import { compose } from 'recompose';
import { connect } from "react-redux";
import Pure from './Pure';
import { set_socket } from "../../redux/socket";
import { set_intl } from "../../redux/intl";

const HOC = compose(
    connect(null, (dispatch, props) => {
        return {
            setSocket: (payload) => {
                dispatch(set_socket(payload));
            },
            setIntl: (payload) => {
                dispatch(set_intl(payload));
            }
        };
    })
)(Pure);

export default HOC;