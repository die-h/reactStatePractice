import React from "react";

interface CSP {
  name: string;
}
interface CSPS {
  error: boolean;
  loading: boolean;
}
class ClassState extends React.Component<CSP, CSPS> {
  constructor(props: CSP) {
    super(props);

    this.state = {
      error: false,
      loading: false,
    };
  }

  componentDidUpdate(prevProps: Readonly<CSP>, prevState: Readonly<CSPS>, snapshot?: any): void {
    if (!!this.state.loading) {
      console.log("loading");
      setTimeout(() => {
        this.setState({...this.state, loading: false})
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name} </h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {this.state.error && <p>Hay un error!</p>}
        {this.state.loading && <p>Cargando...</p>}
        <input placeholder="Código de seguridad" type="text" />
        <button
        // onClick={() => this.setState({...this.state, error: !this.state.error})}>Comprobar</button>
        onClick={() => this.setState({...this.state, loading: true})}>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
