import 'bulma/css/bulma.min.css';
import { Icon } from "react-bulma-components";

export default function CartWidget({number}) {
	return (
		<>
            <Icon
                color='default'
                size='large'
                style={{
                    border: '1px solid red'
                }}
            >
                <i className="fas fa-home fa-2x" style={{color: 'red'}}/>
            </Icon>



			<span>{number}</span>
		</>
	);
}