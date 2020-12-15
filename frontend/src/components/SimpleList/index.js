import React from "react";
import StoreIcon from "@material-ui/icons/Store";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

const SimpleList = () => {
  return (
    <>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Lojas" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Fornecedor" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Classificação" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Config Suplay" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StoreIcon />
          </ListItemIcon>
          <ListItemText primary="Gerenciamento Suplay" />
        </ListItem>
      </List>
    </>
  );
};

export default SimpleList;
