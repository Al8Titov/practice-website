import PropTypes from 'prop-types';
import slyled from 'styled-components';

const H2Container = ({ children, className }) => {
	<h2 className={className}>{children}</h2>;
};

export const H2 = slyled(H2Container)`
margin: 40px 0;
`;

H2.propTypes = {
	children: PropTypes.node.isRequired,
};
