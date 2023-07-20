import { Paper, Box, Typography } from "@mui/material"
import { FC, useCallback, useMemo } from "react"
import MonacoEditor, { monaco } from "react-monaco-editor"
import { getMonacoModelForUri } from "./Editor/jsonSchemaValidation"
import { uiSchemaDefault } from "./testJson"
import { Uri } from "monaco-editor"

const ResultView: FC<{ jsonData: any }> = ({ jsonData }) => {
  const options = {
    selectOnLineNumbers: true,
  }

  const modelUri = Uri.parse("json://core/specification/schema.json")

  const uiSchemaModel = useMemo(
    () =>
      getMonacoModelForUri(modelUri, JSON.stringify(uiSchemaDefault, null, 2)),
    [modelUri],
  )

  const uiSchemaEditorDidMount = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor, monaco: any) => {
      console.log("uiSchemaModelschemaEditorDidMount", editor)
      editor.focus()
      editor.setModel(uiSchemaModel)
    },
    [uiSchemaModel],
  )

  const onChange = useCallback((newValue: any, e: any) => {
    console.log("onChange", newValue, e)
  }, [])

  return (
    <>
      <Paper variant="outlined" sx={{ width: "100%" }}>
        <Box>
          <Typography variant={"h5"} color={"primary"}>
            {"Data"}
          </Typography>
        </Box>
        <MonacoEditor
          height="600"
          language="json"
          theme="vs-dark"
          value={jsonData}
          options={options}
          onChange={onChange}
          editorDidMount={uiSchemaEditorDidMount}
        />
      </Paper>
    </>
  )
}

export default ResultView
