import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { FC, useCallback, useEffect, useMemo, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { JsonForms, JsonFormsInitStateProps } from "@jsonforms/react"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { jsonSchemaDefault, uiSchemaDefault } from "./testJson"
import { getMonacoModelForUri } from "./Editor/jsonSchemaValidation"
import { Uri } from "monaco-editor/esm/vs/editor/editor.api"

const Dashboard: FC = () => {
  const [jsonSchema, setJsonSchema] = useState<any>(
    JSON.stringify(jsonSchemaDefault, null, 2),
  )

  const [uiSchema, setUiSchema] = useState<any>(
    JSON.stringify(uiSchemaDefault, null, 2),
  )

  const [data, setData] = useState()

  const options = {
    selectOnLineNumbers: true,
  }
  useEffect(() => {
    console.log("..jsonSchema", jsonSchema)
  }, [jsonSchema])

  const modelUri = Uri.parse("json://core/specification/schema.json")

  const schemaModel = useMemo(
    () =>
      getMonacoModelForUri(
        modelUri,
        JSON.stringify(jsonSchemaDefault, null, 2),
      ),
    [modelUri],
  )

  const schemaEditorDidMount = useCallback(
    (editor: monaco.editor.IStandaloneCodeEditor, monaco: any) => {
      console.log("schemaEditorDidMount", editor)
      editor.focus()
      editor.setModel(schemaModel)
    },
    [schemaModel],
  )

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
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Grid item md={12} sx={{ width: "100%" }}>
            <Paper variant="outlined" sx={{ width: "100%" }}>
              <Box>
                <Typography variant={"h5"} color={"primary"}>
                  {"JSON Schema"}
                </Typography>
              </Box>
              <MonacoEditor
                height="600"
                language="json"
                theme="vs-dark"
                value={jsonSchema}
                options={options}
                onChange={onChange}
                editorDidMount={schemaEditorDidMount}
              />
            </Paper>
          </Grid>

          <Grid item container spacing={2} md={12}>
            <Grid item md={6} sx={{ width: "100%" }}>
              <Paper variant="outlined" sx={{ width: "100%" }}>
                <Box>
                  <Typography variant={"h5"} color={"primary"}>
                    {"UI Schema"}
                  </Typography>
                </Box>
                <MonacoEditor
                  height="600"
                  language="json"
                  theme="vs-dark"
                  value={uiSchema}
                  options={options}
                  onChange={onChange}
                  editorDidMount={uiSchemaEditorDidMount}
                />
              </Paper>
            </Grid>
            <Grid item md={6}>
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
                  value={uiSchema}
                  options={options}
                  onChange={onChange}
                  editorDidMount={uiSchemaEditorDidMount}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={6} sx={{ Width: "100%" }}>
          <Card>
            <CardHeader title={"Render"} />
            <CardContent sx={{ Width: "100%" }}>
              <JsonForms
                schema={JSON.parse(jsonSchema)}
                uischema={JSON.parse(uiSchema)}
                data={data}
                renderers={materialRenderers}
                cells={materialCells}
                onChange={({ data, _errors }) => setData(data)}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard
