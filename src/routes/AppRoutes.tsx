import React, { FC } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from "../Modules/Dashboard/Dashboard"
import Layout from "../Layout/Layout"
import UIView from "../Modules/Dashboard/UIView"
import Schema from "../Modules/Dashboard/Schema"
import UComponents from "../Modules/UComponents"
import FormView from "../Modules/Dashboard/FormView/FormView"

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<Dashboard />}>
          <Route path={"ui"} element={<UIView />} />
          <Route path={"schema"} element={<Schema />} />
          <Route path={"form"} element={<FormView />} />
          <Route path={"*"} element={<Navigate to={"ui"} replace />} />
        </Route>
        <Route path={"c"} element={<UComponents />} />

      </Route>
    </Routes>
  )
}

export default AppRoutes
