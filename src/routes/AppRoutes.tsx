import React, { FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../Modules/Dashboard/Dashboard"
import Layout from "../Layout/Layout"
import UIView from "../Modules/Dashboard/UIView"
import Schema from "../Modules/Dashboard/Schema"
import UiSchema from "../Modules/Dashboard/UiSchema"
import Result from "../Modules/Dashboard/Result"

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Dashboard />}>
          <Route path={"ui"} element={<UIView />} />
          <Route path={"schema"} element={<Schema />} />
          <Route path={"uischema"} element={<UiSchema />} />
          <Route path={"data"} element={<Result />} />
          <Route path={"*"} element={<Navigate to={"ui"} replace />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRoutes
