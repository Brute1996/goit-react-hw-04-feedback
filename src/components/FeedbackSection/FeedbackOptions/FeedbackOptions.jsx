import PropTypes from 'prop-types'
import { FeedbackButtonList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options: { good, neutral, bad }, onLeaveFeedback }) => {
    return (
        <FeedbackButtonList>
            <li ><button className='feedback-button' type="button" data-feedback-option={good} onClick={onLeaveFeedback}>Good</button></li>
            <li ><button className='feedback-button' type="button" data-feedback-option={neutral} onClick={onLeaveFeedback}>Neutral</button></li>
            <li ><button className='feedback-button' type="button" data-feedback-option={bad} onClick={onLeaveFeedback}>Bad</button></li>
        </FeedbackButtonList>
    );
};


FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.string.isRequired,
        neutral: PropTypes.string.isRequired,
        bad: PropTypes.string.isRequired,
    }).isRequired,

    onLeaveFeedback: PropTypes.func.isRequired,
};