import { FC, useCallback } from "react"
import MonacoEditor from "react-monaco-editor"
import { Outlet } from "react-router-dom"

const UJsonEditor: FC<{ schema: any; editorDidMount: any }> = ({
  schema,
  editorDidMount,
}) => {
  const options = {
    selectOnLineNumbers: true,
  }
  const onChange = useCallback((newValue: any, e: any) => {
    console.log("onChange", newValue, e)
  }, [])
  return (
    <MonacoEditor
      height="1000"
      language="json"
      theme="vs-dark"
      value={schema}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  )
}

const Dashboard: FC = () => {
  return <Outlet />
}
export default Dashboard
