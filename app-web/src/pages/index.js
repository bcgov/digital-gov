<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React, { Component } from 'react';
<<<<<<< HEAD
import { graphql } from 'gatsby';
<<<<<<< HEAD
>>>>>>> 1f9aa72... import graphql into files that require graphql
// import YAML from 'js-yaml';
import shortid from 'shortid';
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';
<<<<<<< HEAD
import {Flag} from 'flag';
import {groupBy} from '../utils/dataMassager';
import {GITHUB_ISSUES_ROUTE} from '../constants/routes';
=======
=======
import shortid from 'shortid';
import { connect } from 'react-redux';
>>>>>>> 834b227... add scrolling to cards container
import { Flag } from 'flag';
import queryString from 'query-string';
import * as actions from '../store/actions/actions';
<<<<<<< HEAD
import { groupBy } from '../utils/dataMassager';
<<<<<<< HEAD
import { REACT_SCROLL } from '../constants/ui';
<<<<<<< HEAD
<<<<<<< HEAD
import { DEFAULT_FILTERS } from '../constants/filterGroups';
<<<<<<< HEAD
>>>>>>> 4a9ee9b... add ui components for filtering
// local components
=======
=======
=======
=======
=======
>>>>>>> b347e45... add an unmount to unset search bar terms
import { REACT_SCROLL, SIPHON_RESOURCE_TYPE_PROP } from '../constants/ui';
>>>>>>> c58051b... integrate filtering
import FLAGS from '../constants/featureflags';
>>>>>>> e9453ab... revert filter components back into index page to make layout more usable

>>>>>>> c837965... refactor out welcome panel
import styles from './index.module.css';
// components
import { Element } from 'react-scroll';
<<<<<<< HEAD
>>>>>>> 834b227... add scrolling to cards container
=======
import Loading from '../components/UI/Loading/Loading';
>>>>>>> 4d4c4bb... update lunr search to correct race condition
import Layout from '../hoc/Layout';
import Cards from '../components/Cards/Cards';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Button from '../components/UI/Button/Button'
import styles from './index.module.css';
=======
>>>>>>> 834b227... add scrolling to cards container
import CardFilterButton from '../components/CardFilterButton/CardFilterButton';
=======
import WelcomePanel from '../components/WelcomePanel/WelcomePanel';
<<<<<<< HEAD
>>>>>>> c837965... refactor out welcome panel
=======
import Sidebar from '../components/Sidebar/Sidebar';
>>>>>>> 898f61d... abstract secondary filter away into filtermenu and sidebar
=======
import Sidebar from '../components/Sidebar/Sidebar';
import WelcomePanel from '../components/WelcomePanel/WelcomePanel';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> c7efc11... abstract more into layout component
=======
import PrimaryFilter from '../components/PrimaryFilter/PrimaryFilter';
=======
import PrimaryFilter from '../components/Navigation/PrimaryFilter';
>>>>>>> 53cf58b... fix typo
import Dropmenu from '../components/Dropmenu/Dropmenu';
<<<<<<< HEAD
>>>>>>> e9453ab... revert filter components back into index page to make layout more usable
=======
import ToolsMenu from '../components/ToolsMenu/ToolsMenu';
>>>>>>> ee263cf... integrate Toolsmenu
=======
// components
import Layout from '../hoc/Layout';
>>>>>>> ad90569... get app working

export class Index extends Component {
  render() {
<<<<<<< HEAD
<<<<<<< HEAD
    const { collections, toggleMenu, filters } = this.props;
<<<<<<< HEAD
    let mappedSiphonNodes = [];
<<<<<<< HEAD
    if (nodes && nodes.length) {
      mappedSiphonNodes = nodes
        .filter(node => node.childMarkdownRemark && !node.childMarkdownRemark.frontmatter.pageOnly)
        .map(node => ({
          ...node.unfurl,
          resourcePath: node.resource.path,
          collectionName: node.collection.name,
          sourcePath: node.source.sourcePath,
          resourceType: node.resource.type,
          owner: node.owner,
          repository: node.source.name,
        }));
    }

    render() {
        const {nodes, location: {pathname}} = this.props;
        let mappedSiphonNodes = [];
        if (nodes && nodes.length) {
            mappedSiphonNodes = nodes
                .filter(node => node.childMarkdownRemark && !node.childMarkdownRemark.frontmatter.pageOnly)
                .map(node => ({
                    ...node.unfurl,
                    resourcePath: node.resource.path,
                    sourceName: node.source.displayName,
                    sourcePath: node.source.sourcePath,
                    resourceType: node.resource.type,
                }));
        }

=======
>>>>>>> a3a5287... add unit tests for redux
=======
    // group nodes into collections for display purposes
>>>>>>> 4a9ee9b... add ui components for filtering
    const groupedSiphonData = groupBy(mappedSiphonNodes, 'collectionName');
=======
    // if (collections && collections.length) {
    //   mappedSiphonNodes = nodes
    //     .filter(node => node.childMarkdownRemark && !node.childMarkdownRemark.frontmatter.pageOnly)
    //     .map(node => ({
    //       ...node.unfurl,
    //       resourcePath: node.resource.path,
    //       collectionName: node.collection.name,
    //       sourcePath: node.source.sourcePath,
    //       resourceType: node.resource.type,
    //       owner: node.owner,
    //       repository: node.source.name,
    //     }));
    // }
    // // group nodes into collections for display purposes
    // const groupedSiphonData = groupBy(mappedSiphonNodes, 'collectionName');
>>>>>>> 138c52d... update fixtures for collections
    // convert grouped data into their 'collected' cards containers
=======
=======
    const { collections, toggleMenu, filters, searchResultsLength, totalResources } = this.props;
>>>>>>> ee263cf... integrate Toolsmenu

>>>>>>> e807459... prettified
    const SiphonResources = collections.map(collection => (
      <Cards
        key={shortid.generate()}
        topic={collection.name}
        description={collection.description}
        cards={collection.nodes}
      />
    ));

    return (
      <Layout showHamburger hamburgerClicked={toggleMenu}>
        <Flag name={`features.${FLAGS.SOURCE_FILTERING}`}>
          <PrimaryFilter />
        </Flag>
        {/* hamburger icon controlled menu */}
        <Dropmenu menuToggled />
        <div className={[styles.MainContainer, 'container'].join(' ')}>
          <Sidebar filters={filters} />
          <div className={styles.Right}>
            <WelcomePanel />
            <ToolsMenu
              filters={filters}
              searchCount={searchResultsLength}
              totalNodeCount={totalResources}
            />
            <main role="main" className={styles.Main}>
              {/* Element used for react-scroll targeting */}
              {this.props.loading ? (
                <Loading message="Loading..." />
              ) : (
                <Element name={REACT_SCROLL.ELEMENTS.CARDS_CONTAINER}>
                  <div className={styles.CardContainer}>
                    <Flag name="features.githubResourceCards">{SiphonResources}</Flag>
                  </div>
                </Element>
              )}
            </main>
          </div>
        </div>
      </Layout>
    );
  }
}

export const resourceQuery = graphql`
  query resourceQuery {
    allDevhubSiphonCollection(sort: { fields: [_metadata___position] }) {
      edges {
        node {           
          id
          name
          description
          nodes: childrenDevhubSiphon {
            id
            name
            owner
            parent {
              id
            }
            _metadata {
              position
            }
            attributes {
              personas
            }
            source {
              displayName
              sourcePath
              type
              name
            }
            resource {
              path
              type
            }
            unfurl {
              title
              description
              type
              image
              author
            }
            childMarkdownRemark {
              frontmatter {
                pageOnly
              }
            }
          }
        }
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    collections: state.siphon.filteredCollections,
    collectionsLoaded: state.siphon.collectionsLoaded,
    displayWelcome: !state.ui.welcomePanelWasViewed,
    query: state.siphon.query,
    filters: state.siphon.filters,
    loading: state.siphon.loading,
    searchResultsLength: state.siphon.searchResultsLength,
    totalResources: state.siphon.totalResources,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadCollections: collections => dispatch(actions.loadSiphonCollections(collections)),
    setSearchResults: results => dispatch(actions.setSearchResults(results)),
    filterCollectionsByResourceType: () =>
      dispatch(actions.filterSiphonNodes(SIPHON_RESOURCE_TYPE_PROP, 'All')),
    hideWelcomeMessage: () => dispatch(actions.setWelcomePanelViewed(true)),
    setSearchQuery: query => dispatch(actions.setSearchQuery(query)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
=======
    return <Layout>hello world</Layout>;
  }
}

export default Index;
>>>>>>> ad90569... get app working
