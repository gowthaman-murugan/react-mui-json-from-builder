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
import URadioGroup from "../Controls/URadioGroup/URadioGroup"
import { URadioGroupTester } from "../Controls/URadioGroup/URadioGroupTester"
import ResultView from "./Result"
import UiSchema from "./UiSchema"
import { UInputTester } from "../Controls/UInput/UInputTester"
import UInput from "../Controls/UInput/UInput"
import UArchesTreat from "../Controls/UArchesTreat/UArchesTreat"
import { UArchesTreatTester } from "../Controls/UArchesTreat/UArchesTreatTester"
import { USelectTester } from "../Controls/USelect/USelectTester"
import USelect from "../Controls/USelect/USelect"
import UArchLayout from "../Controls/UArchLayout/UArchLayout"
import { UArchLayoutTester } from "../Controls/UArchLayout/UArchLayoutTester"

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
      height="600"
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
  const renderers = [
    ...materialRenderers,
    //register custom renderers
    { tester: UArchesTreatTester, renderer: UArchesTreat },
    { tester: UArchLayoutTester, renderer: UArchLayout },
    { tester: USelectTester, renderer: USelect },
    { tester: URadioGroupTester, renderer: URadioGroup },
    { tester: UInputTester, renderer: UInput },
  ]

  const [uiSchema, setUiSchema] = useState<any>(
    JSON.stringify(uiSchemaDefault, null, 2),
  )

  const [jsonSchema, setJsonSchema] = useState<any>(
    JSON.stringify(jsonSchemaDefault, null, 2),
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

              <UJsonEditor
                schema={jsonSchema}
                editorDidMount={schemaEditorDidMount}
              />
            </Paper>
          </Grid>

          <Grid item container spacing={2} md={12}>
            <Grid item md={6} sx={{ width: "100%" }}>
              <UiSchema uiSchema={uiSchema} />
            </Grid>
            <Grid item md={6}>
              <ResultView jsonData={uiSchema} />
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
                renderers={renderers}
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
