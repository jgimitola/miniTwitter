import NavButton from "../../common/NavButton"
import {Container} from "./styled";
const Nav = () => {
    return(
        <Container>
            <NavButton buttonLabel="Home" linkTo="/home"/>
            <NavButton buttonLabel="Profile" linkTo="/profile"/>

        </Container>
    );
};
export default Nav;