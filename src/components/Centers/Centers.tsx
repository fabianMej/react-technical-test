import React, {Component, Dispatch} from 'react';
import Center from '../Centers/Center/Center';
import Error from '../UI/Error/Error';
import { CenterModel } from '../../models/CenterModel';
import './Centers.css';
import { connect } from 'react-redux';
import { CenterState } from '../../redux/types/types';
import { fetchCenters } from '../../redux/types/CenterActionTypes';

interface Props extends DispacthProps{ 
    centers?: CenterModel[];
    error?: boolean;
}

class Centers extends Component<Props> {

    componentDidMount() {
        if(this.props.fetchCenters) {
            this.props.fetchCenters();
        }

        console.log(this.props);
    }

    render() {
        let centers: any = <p className="h5">Loading...</p>;

        if (this.props.centers) {
            centers = this.props.centers.map((center) => {
                return <Center key={center._id} centerModel={center}></Center>
            })
        }

        return (
            (this.props.error) ? <Error errorMessage="Sorry, we couldn't find centers."/>
            : centers
        )
    }
}

    const mapStateToProps = (state: CenterState) => {
        console.log(state.centers);
        return {
            centers: state.centers,
            error: state.error
        }
    }

    interface DispacthProps {
        fetchCenters?: () => void;
    }

    const mapDispatchToProps = (dispacth: Dispatch<any>): DispacthProps => ({
        fetchCenters: () => dispacth(fetchCenters())
    });

export default connect(mapStateToProps, mapDispatchToProps)(Centers);