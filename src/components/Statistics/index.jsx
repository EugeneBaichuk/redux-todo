import {connect} from 'react-redux';
import "./style.scss";

const Statistics = ({done, important}) => {
  return (
    <div className="stat">
      <p>
        Done: <span id="done-counter">{done}</span>
      </p>
      <p>
        Important: <span id="important-counter">{important}</span>
      </p>
    </div>
  );
};
const mapStateToProps = ({done, important}) => {
  return {done, important}
}


export default connect(mapStateToProps)(Statistics);
