import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';

class CampaignShow extends Component {
   static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items =  [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and can create requests to spend money.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'The minimum amount of wei to become a contributor.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: requestsCount,
                meta: 'Spending Requests',
                description: 'The number of spending requests made by the manager. Requests must be approved by contributors.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: approversCount,
                meta: 'Contributors',
                description: 'The number of contributors to the campaign.',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.',
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                {this.renderCards()}
            </Layout>
        );
    }
}

export default CampaignShow;