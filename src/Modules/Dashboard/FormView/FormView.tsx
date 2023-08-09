import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Tab,
  Tabs,
} from "@mui/material"
import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Editor from "@monaco-editor/react"
import { jsonSchemaDefault, uiSchemaDefault } from "../prescriptionFormJson"
import { materialRenderers, materialCells } from "@jsonforms/material-renderers"
import { JsonForms } from "@jsonforms/react"
import UArchesTreat from "../../Controls/UArchesTreat/UArchesTreat"
import { UArchesTreatTester } from "../../Controls/UArchesTreat/UArchesTreatTester"
import UInput from "../../Controls/UInput/UInput"
import { UInputTester } from "../../Controls/UInput/UInputTester"
import URadioGroup from "../../Controls/URadioGroup/URadioGroup"
import { URadioGroupTester } from "../../Controls/URadioGroup/URadioGroupTester"
import URadioTextGroup from "../../Controls/URadioTextGroup/URadioTextGroup"
import { URadioTextGroupTester } from "../../Controls/URadioTextGroup/URadioTextGroupTester"
import URadioTextGroupLayout from "../../Controls/URadioTextGroupLayout/URadioTextGroupLayout"
import { URadioTextGroupLayoutTester } from "../../Controls/URadioTextGroupLayout/URadioTextGroupLayoutTester"
import USelect from "../../Controls/USelect/USelect"
import { USelectTester } from "../../Controls/USelect/USelectTester"
import UTextarea from "../../Controls/UTextarea/UTextarea"
import { UTextareaTester } from "../../Controls/UTextarea/UTextareaTester"
import { Actions } from "@jsonforms/core"

const FormView: FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState(false)
  const [tabValue, setTabValue] = useState("1")
  const [editorSchema, setEditorSchema] = useState<any>()
  const [uiSchema, setUiSchema] = useState<any>(
    JSON.stringify(uiSchemaDefault, null, 2),
  )

  const [jsonSchema, setJsonSchema] = useState<any>(
    JSON.stringify(jsonSchemaDefault, null, 2),
  )
  const [locale, setLocale] = useState<"de" | "en">("de")

  const renderers = [
    ...materialRenderers,
    //register custom renderers
    { tester: UArchesTreatTester, renderer: UArchesTreat },
    { tester: USelectTester, renderer: USelect },
    { tester: URadioGroupTester, renderer: URadioGroup },
    { tester: UInputTester, renderer: UInput },
    { tester: URadioTextGroupTester, renderer: URadioTextGroup },
    { tester: URadioTextGroupLayoutTester, renderer: URadioTextGroupLayout },
    { tester: UTextareaTester, renderer: UTextarea },
  ]

  useEffect(() => {
    setEditorSchema(JSON.stringify(jsonSchemaDefault, null, 2))
  }, [])

  const handleSubmit = () => {
    // Custom logic for handling the form submission
    // You can access the form data from the 'data' state
    console.log(data)
    setSubmitted(true)

    // Additional logic to handle form submission
  }

  const createTranslator =
    (locale: string) => (key: string, defaultMessage: string) => {
      if (key === "error.required") {
        return "This field is required"
      }
      return defaultMessage
    }

  const translation = useMemo(() => createTranslator(locale), [locale])

  const handleChangeTab = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
    if (newValue === "1") {
      setEditorSchema(JSON.stringify(jsonSchemaDefault, null, 2))
    }
    if (newValue === "2") {
      setEditorSchema(JSON.stringify(uiSchemaDefault, null, 2))
    }
    if (newValue === "3") {
      //TODO
      setEditorSchema(JSON.stringify({}, null, 2))
    }
  }

  const handleEditorChange = (value: any, event: any) => {
    // here is the current value
     setIsEditing(true)
    if (value) {
        setEditorSchema(value)
      if (tabValue === "1") {
        setJsonSchema(value)
        Actions.setSchema(value)
      }
      if (tabValue === "2") {
        setUiSchema(value)
        Actions.setUISchema(value)
      }
    }
     setIsEditing(false)
  }

  const handleEditorDidMount = (editor: any, monaco: any) => {
    console.log("onMount: the editor instance:", editor)
    console.log("onMount: the monaco instance:", monaco)
  }

  const handleEditorWillMount = (monaco: any) => {
    console.log("beforeMount: the monaco instance:", monaco)
  }

  const handleEditorValidation = (markers: any) => {
    // model markers
    // markers.forEach(marker => console.log('onValidate:', marker.message));
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={6}>
        <Paper variant="outlined">
          <Box>
            <Tabs
              value={tabValue}
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

          <Editor
            theme="vs-dark"
            path={tabValue}
            height="90vh"
            defaultLanguage={"JSON"}
            defaultValue={editorSchema}
            onChange={handleEditorChange}
            onMount={handleEditorDidMount}
            beforeMount={handleEditorWillMount}
            onValidate={handleEditorValidation}
          />
        </Paper>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper variant="outlined">
          <Box>
            {isEditing && <CircularProgress />}
            {!isEditing && (
              <>
                <JsonForms
                  i18n={{ locale: locale, translate: translation }}
                  schema={JSON.parse(jsonSchema)}
                  uischema={JSON.parse(uiSchema)}
                  data={{}}
                  renderers={renderers}
                  cells={materialCells}
                  validationMode={
                    submitted ? "ValidateAndShow" : "NoValidation"
                  }
                  onChange={({ errors, data }) => {
                    console.log(" json schema on change:", errors, data)
                  }}
                />
                <Button
                  onClick={handleSubmit} // Add the 'onSubmit' logic here
                  color="primary"
                  variant="contained"
                >
                  Submit
                </Button>
              </>
            )}
          </Box>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default FormView
