import React, {Component} from 'react';
import { CENTER_MOCK } from '../../mocks/CenterMock';
import Center from '../Centers/Center/Center';

interface State { }

interface Props { }

class Centers extends Component<Props, State> {
    state = {
        centers: []
    }

    componentDidMount() {
        let centers = [];
        centers.push(CENTER_MOCK);
        this.setState({centers});
    }

    render() {
        return this.state.centers.map((center: any) => {
            return <Center key={center._id} centerModel={center}></Center>
        })
    }
}

export default Centers;