import React from 'react';
import ajax from 'superagent';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        };
    }
    componentWillMount() {
        ajax.get(`https://api.github.com/users/${this.props.params.user}/events`)
            .end((error, response) => {
                if (!error && response) {
                    console.dir(response.body);
                    this.setState({events: response.body});
                } else {
                    console.log(`Error fetching user data`, error);
                }
            })
    }

    render() {
        return (
            <ul>
                {this.state.events.map((event, index) => {
                    const eventType = event.type;
                    const repoName = event.repo.name;
                    const creationDate = event.created_at;

                    return (
                        <li key={index}>
                            <strong>{repoName}</strong>: {eventType} at {creationDate}.
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default User;
