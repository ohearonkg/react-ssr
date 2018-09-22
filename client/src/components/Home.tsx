import * as React from "react";

interface IHomeState {
  /**
   * Boolean representing
   * if some data has been
   * fetched
   */
  hasFetched: boolean
}
export default class Home extends React.Component<{},IHomeState> {

  constructor(props: null) {
    super(props);
    this.state = {
      hasFetched: false
    }
  }

  /**
   * Pretending to fetch something
   * from and API
   */
  public componentDidMount() {
    setTimeout(() => {
      this.setState({hasFetched: true})
    },3000)
  }

  public render() {
    const {hasFetched} = this.state;

    if (hasFetched === false) {
      return <h2> I am loading something </h2>
    }

    return (
      <div>I'm The Home Component</div>
    )
  }
}
