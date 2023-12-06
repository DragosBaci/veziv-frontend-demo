import { useParams } from 'react-router-dom';
import DynamicForm from '../../components/DynamicForm/DynamicForm';
import formData from '../../utils/FormData';
import CardForm from '../../components/CardForm/CardForm';
import CardEditForm from '../CardEditForm/CardEditForm';

const Edit = () => {
    const { id } = useParams();
    if (id == 'card') {
        return <CardForm formData={formData.card} />;
    }
    if (id === 'cardEdit') {
        return <CardEditForm />;
    }
    return <DynamicForm formData={formData[id as keyof typeof formData]} id={id} />;
};

export default Edit;
