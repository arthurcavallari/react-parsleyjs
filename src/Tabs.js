import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {
    render() {
        const tabs = [];
        this.props.tabs.forEach((tab) => {
            tabs.push(
                <Tab key={tab.tabIndex}
                     label={tab.label}
                     tabIndex={tab.tabIndex}
                     onTabClick={this.props.onTabClick}
                     activeTabIndex={this.props.activeTabIndex} />
            )
        });

        return (
            <div className="tabs">
                {tabs}
            </div>
        );
    }
}
class Tab extends Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(e) {
        this.props.onTabClick(e);
    }

    render() {
        return (
            <button className={"tab " + (this.props.activeTabIndex === this.props.tabIndex ? 'active' : '')} data-tab-index={this.props.tabIndex} onClick={this.handleTabClick}>{this.props.label}</button>
        );
    }
}
class TabPanelContainer extends Component {
    render() {
        return (
            <div className="tab-panel-container">
                {this.props.children}
            </div>
        );
    }
}

class TabPanel extends Component {
    render() {
        return (
            <div className="tab-panel" style={{display: this.context.activeTabIndex === this.props.tabIndex ? 'block' : 'none'}}>
                {this.props.children}
            </div>
        );
    }
}
TabPanel.contextTypes = {
    activeTabIndex: PropTypes.string
};

class TabController extends Component {
    constructor(props) {
        super(props);
        this.handleTabClick = this.handleTabClick.bind(this);

        this.state = {
            activeTabIndex: '0'
        };
    }

    handleTabClick(e) {
        this.setState({
            activeTabIndex: e.target.dataset.tabIndex
        })
    }

    getChildContext() {
        return {
            activeTabIndex: this.state.activeTabIndex
        };
    }

    render() {
        return (
            <div className="tab-container">
                <Tabs tabs={this.props.tabs} activeTabIndex={this.state.activeTabIndex} onTabClick={this.handleTabClick}/>
                <TabPanelContainer>
                    {this.props.children}
                </TabPanelContainer>
            </div>
        );
    }
}
TabController.childContextTypes = {
    activeTabIndex: PropTypes.string
};
export {TabController, TabPanel};