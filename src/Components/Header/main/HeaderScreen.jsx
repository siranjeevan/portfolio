import Logo from '../Logo.jsx'
import Navigation from '../Navigation.jsx'
import RegisterButton from '../RegisterButton.jsx'
import HeaderLayout  from '../HeaderLayout.jsx'

function HeaderScreen(){
    return(
        <>
        <HeaderLayout>
            <Logo />
            <Navigation /> 
            <RegisterButton /> 
        </HeaderLayout>
        </>
        
    );
}
export default HeaderScreen;