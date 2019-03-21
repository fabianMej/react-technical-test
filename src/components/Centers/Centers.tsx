import React, {Component} from 'react';
import Center from '../Centers/Center/Center';
import axios from 'axios';
import Error from '../UI/Error/Error';
import { CenterModel } from '../../models/CenterModel';
import './Centers.css';

interface State {
    centers: Array<CenterModel>;
    errors: boolean
 }

interface Props { }

class Centers extends Component<Props, State> {

    readonly state: State  = {
        centers: [],
        errors: false
    }

    componentDidMount() {
        axios.get('5c9313af320000d9636bd199')
            .then(response => {
                const centers = [];
                centers.push(response.data);
                this.setState({centers, errors: false});
            })
            .catch(error => {
                console.log(error);
                this.setState({errors: true});
            });
        
    }

    render() {
        let centers: any = <p className="h5">Loading...</p>;

        if (this.state.centers) {
            centers = this.state.centers.map((center) => {
                return <Center key={center._id} centerModel={center}></Center>
            })
        }

        return (
            (this.state.errors) ? <Error errorMessage="Sorry, we couldn't find centers."/>
            : centers
        )
    }
}

export default Centers;