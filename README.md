### Module Federation POC

This repo contains code demonstrating module federation with React components. Host UI imports components dynamically from the other two react apps here - css components and material components.

### Installation

```
# Clone the repository
git clone https://github.com/rkpattnaik780/rk-votingappfcc.git


# Navigate to each sub-folder in the repository individually and install npm dependencies

cd host-ui 
yarn

cd material_components
yarn

cd css-components
yarn
```

### Running federated modules locally

```
# Run material_components as a federated module

cd material_components
yarn federated

# Run css-components as a federated module

cd css-components
yarn federated

# Run host-ui

cd host-ui
yarn federated
```

Visit [http://localhost:8082/](http://localhost:8082/) in your browser, you can see the host ui importing `navbar` from `material_components` and `footer` from `css-components`.