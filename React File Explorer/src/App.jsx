import './App.css'
import { FileExplorer } from './component/FileExplorer'
import data from './data.json'
function App() {

  return (
    <>
    <FileExplorer folderData = {data}></FileExplorer>
    </>
  )
}

export default App
