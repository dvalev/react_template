import React from "react";
import { SocketProvider } from "socket.io-react";
import io from "socket.io-client";

class SocketIO extends React.Component {
  componentDidMount() {
    const uri = window.location.hostname + ":4001";
    const socket = io.connect(uri);
    if (this.props.useRedux && this.props.setSocket) {
      this.props.setSocket(socket);
    }
  }

  render() {
    return <SocketProvider>{this.props.children}</SocketProvider>

  }
}

export default SocketIO;
