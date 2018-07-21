import { connect } from 'react-redux';
import TodoList from '../components/Counter';

const mapStateToProps = state => ({
    counter: state.counter,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
