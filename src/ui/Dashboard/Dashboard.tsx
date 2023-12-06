import { Button, DashboardContainer, DashboardPageContainer } from './Dashboard.style';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleClick = (param: string) => {
        navigate(`/admin/edit/${param}`);
    };

    return (
        <DashboardPageContainer>
            <DashboardContainer>
                <Button onClick={() => handleClick('home')}>Home</Button>
                <Button onClick={() => handleClick('about')}>About</Button>
                <Button onClick={() => handleClick('work')}>Work</Button>
                <Button onClick={() => handleClick('contact')}>Contact</Button>
                <Button onClick={() => handleClick('card')}>Card Create</Button>
                <Button onClick={() => handleClick('cardEdit')}>Card Edit</Button>
            </DashboardContainer>
        </DashboardPageContainer>
    );
};

export default Dashboard;
