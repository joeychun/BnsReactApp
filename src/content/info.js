import React from 'react'
import { Header, Button, Icon, List } from 'semantic-ui-react'

const InfoList = () => {
    return (
        <div>
            <List>
                <List.Item>
                    <List.Icon name='users' />
                    <List.Content>Behavioral Neuroscience</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>???</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail' />
                    <List.Content>
                        <a href='bns@bns.com'>bns@bns.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='youtube' />
                    <List.Content>
                        <a href='https://www.youtube.com/channel/UCFQ8WlLN-ye9VLUEsDJOzjA'>YouTube Link</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='instagram' />
                    <List.Content>
                        <a href='https://www.instagram.com/behavioral_neuroscience/'>Instagram Link</a>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    )
}

export default InfoList;
