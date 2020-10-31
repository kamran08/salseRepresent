export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (store.state.authInfo.agent_type != 'sales_director' && store.state.authInfo.agent_type != "senior_management") {
      return redirect('/')
    }
  }