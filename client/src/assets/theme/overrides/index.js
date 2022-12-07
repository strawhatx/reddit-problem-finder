import { merge } from "lodash";
import { Card } from "./Card";
import { Dialog } from "./Dialog";
import { Lists } from "./Lists";
import { Paper } from "./Paper";
import { Input } from "./Input";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";
import { Backdrop } from "./Backdrop";
import { Typography } from "./Typography";
import { IconButton } from "./IconButton";
import { Autocomplete } from "./Autocomplete";
import { Tabs, Tab } from "./Tabs";

// ----------------------------------------------------------------------

export const ComponentsOverrides = (theme) => {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    Tabs(theme),
    Tab(theme),
    Dialog(theme)
  );
};
