import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";
import { IntlProvider } from "react-intl";
import translations from "../../locale";
import { injectIntl } from "react-intl";
import _ from 'lodash';

const ReduxConnector = compose(
  injectIntl,
  lifecycle({
    componentDidMount() {
      this.props.setIntl(this.props.intl);
    },
  })
)((props) => {
  return <>{props.children}</>;
});

const Intl = (props) => {
  return (
    <IntlProvider locale={props.language} messages={translations}>
      {props.useRedux ? (
        <ReduxConnector setIntl={props.setIntl}>{props.children}</ReduxConnector>
      ) : (
          <>{props.children}</>
        )}
    </IntlProvider>
  );
}

export default compose(
  connect((state, props) => {
    return {
      language: _.get(state, "client.language"),
    };
  }, null)
)(Intl);
