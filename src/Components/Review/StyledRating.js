import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
    iconFilled: {
        color: 'black',
    },
    iconHover: {
        color: 'black',
    },
})(Rating);

export default StyledRating

