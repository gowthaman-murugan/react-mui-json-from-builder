import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material"
import { FC, useCallback, useMemo, useState } from "react"
import MonacoEditor from "react-monaco-editor"
import * as monaco from "monaco-editor/esm/vs/editor/editor.api"
import { JsonForms } from "@jsonforms/react"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { jsonSchemaDefault, uiSchemaDefault } from "./prescriptionFormJson"
import { getMonacoModelForUri } from "./Editor/jsonSchemaValidation"
import { Uri } from "monaco-editor/esm/vs/editor/editor.api"
import URadioGroup from "../Controls/URadioGroup/URadioGroup"
import { URadioGroupTester } from "../Controls/URadioGroup/URadioGroupTester"
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
  const [value, setValue] = useState(1)

  const createTranslator =
    (locale: string) => (key: string, defaultMessage: string) => {
      console.log(
        `Locale: ${locale}, Key: ${key}, Default Message: ${defaultMessage}`,
      )
      if (key === "error.required") {
        return "This field is required"
      }
      return defaultMessage
    }

  const [locale, setLocale] = useState<"de" | "en">("de")
  const translation = useMemo(() => createTranslator(locale), [locale])

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    console.log("....newValue: ", newValue)
    setValue(newValue)
    // if (newValue.toString() === "1") {
    //   setJsonSchema(JSON.stringify(jsonSchemaDefault, null, 2))
    // }
    // if (newValue.toString() === "2") {
    //   setJsonSchema(JSON.stringify(uiSchemaDefault, null, 2))
    // }
    // if (newValue.toString() === "3") {
    //   setJsonSchema({})
    // }
  }

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

  const [data, setData] = useState({})

  const options = {
    selectOnLineNumbers: true,
  }

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
              <Box>
                <Box sx={{ width: "100%" }}>
                  <Tabs
                    value={value}
                    onChange={handleChangeTab}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                  >
                    <Tab value="1" label="JsonSchema" />
                    <Tab value="2" label="UiSchema" />
                    <Tab value="3" label="Data" />
                  </Tabs>
                </Box>
              </Box>

              <UJsonEditor
                schema={jsonSchema}
                editorDidMount={schemaEditorDidMount}
              />
            </Paper>
          </Grid>

          {/* <Grid item container spacing={2} md={12}>
            <Grid item md={6} sx={{ width: "100%" }}>
              <UiSchema uiSchema={uiSchema} />
            </Grid>
            <Grid item md={6}>
              <ResultView jsonData={uiSchema} />
            </Grid>
          </Grid> */}
        </Grid>
        <Grid item md={6} sx={{ Width: "100%" }}>
          <Card>
            <CardHeader title={"Render"} />
            <CardContent sx={{ Width: "100%" }}>
              <JsonForms
                i18n={{ locale: locale, translate: translation }}
                schema={JSON.parse(jsonSchema)}
                uischema={JSON.parse(uiSchema)}
                data={data}
                renderers={renderers}
                cells={materialCells}
                onChange={({ errors, data }) => {
                  console.log(".ddd..errrors:", errors)
                  setData(data)
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
export default Dashboard
