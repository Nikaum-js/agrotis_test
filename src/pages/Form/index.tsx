import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import {
  Box,
  Divider,
  InputAdornment,
  InputLabel,
  ListItemText,
  Select,
  TextField,
} from "@mui/material";

import { useForm } from "react-hook-form";
import api from "../../services/api";
import { Container, FormContent, FormHeader } from "./styles";

export function Form() {
  const { register, handleSubmit } = useForm();
  const [property, setProperty] = useState<String[]>([]);
  const [laboratory, setLaboratory] = useState("");
  const [nameCharactersCounter, setNameCharactersCounter] = useState("");

  const handleChangeProperty = (event: SelectChangeEvent) => {
    setProperty(event.target.value.split(", ", 2));
    console.log(event.target.value.split(", ", 2));
  };

  const handleChangeLaboratory = (event: SelectChangeEvent) => {
    setLaboratory(event.target.value);
    console.log(event.target.value);
  };

  async function handleSubmitForm(data: any): Promise<void> {
    try {
      const response = await api.post("posts", {
        ...data,
        nome: nameCharactersCounter,
        dataInicial: new Date(data.dataInicial).toISOString(),
        dataFinal: new Date(data.dataFinal).toISOString(),
        infosPropriedades: {
          id: 12345,
          nome: property[0],
        },
        cnpj: property[1],
        laboratorio: {
          id: 1234,
          nome: laboratory,
        },
      });

      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <FormContent onSubmit={handleSubmit(handleSubmitForm)}>
        <FormHeader>
          <h3>Teste front-end</h3>

          <button type="submit">Salvar</button>
        </FormHeader>

        <form>
          <Box component="form">
            <TextField
              id="standard-basic"
              label="Nome"
              variant="standard"
              required
              onChange={(value) => {
                setNameCharactersCounter(value.target.value);
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">{`${nameCharactersCounter.length} / 40`}</InputAdornment>
                ),
              }}
              sx={{ width: "576px" }}
            />

            <TextField
              id="standard-date"
              label="Data inicial"
              required
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <InsertInvitationIcon />
                  </InputAdornment>
                ),
              }}
              type="date"
              sx={{ width: "270px", marginLeft: "10px" }}
              variant="standard"
              {...register("dataInicial")}
            />

            <TextField
              id="standard-basic"
              label="Data final"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <InsertInvitationIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ width: "270px", marginLeft: "10px" }}
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="standard"
              {...register("dataFinal")}
            />
          </Box>

          <Box component="form" sx={{}}>
            <FormControl variant="standard" sx={{ width: "563px" }}>
              <InputLabel required id="demo-simple-select-standard-label">
                Propriedades
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={property[0]}
                onChange={handleChangeProperty}
                label="Property"
                displayEmpty
                native={false}
                renderValue={(value) => <ListItemText primary={property[0]} />}
              >
                <MenuItem value="Agrotis1, 58.885.777/0001-60">
                  <ListItemText
                    primary="Agrotis 1"
                    secondary="58.885.777/0001-60"
                  />
                </MenuItem>
                <Divider />
                <MenuItem value="Agrotis2, 58.885.777/0001-61">
                  <ListItemText
                    primary="Agrotis 2"
                    secondary="58.885.777/0001-61"
                  />
                </MenuItem>
                <Divider />
                <MenuItem value="Agrotis3, 58.885.777/0001-62">
                  <ListItemText
                    primary="Agrotis 3"
                    secondary="58.885.777/0001-62"
                  />
                </MenuItem>
                <Divider />
                <MenuItem value="Agrotis4, 58.885.777/0001-63">
                  <ListItemText
                    primary="Agrotis 4"
                    secondary="58.885.777/0001-63"
                  />
                </MenuItem>
                <Divider light />
                <MenuItem value="Agrotis5, 58.885.777/0001-64">
                  <ListItemText
                    primary="Agrotis 5"
                    secondary="58.885.777/0001-64"
                  />
                </MenuItem>
              </Select>
              <InputAdornment position="start" sx={{ mt: 1.8 }}>
              { property[1] ?  `CNPJ ${property[1]}` : "" }
              </InputAdornment>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: "563px", marginLeft: "10px" }}
            >
              <InputLabel id="demo-simple-select-standard-label" required>
                Laboratório
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={laboratory}
                onChange={handleChangeLaboratory}
                label="Laboratory"
              >
                <MenuItem value="Agro Skynet">
                  <ListItemText primary="Agro Skynet" />
                </MenuItem>
                <Divider />
                <MenuItem value="Umbrella Agro">
                  <ListItemText primary="Umbrella Agro" />
                </MenuItem>
                <Divider />
                <MenuItem value="Osborn Agro">
                  <ListItemText primary="Osborn Agro" />
                </MenuItem>
                <Divider />
                <MenuItem value="Skyrim Agro">
                  <ListItemText primary="Skyrim Agro" />
                </MenuItem>
                <Divider light />
                <MenuItem value="Agro Brasil">
                  <ListItemText primary="Agro Brasil" />
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box component="form">
            <TextField
              id="standard-multiline-static"
              label="Observações "
              multiline
              fullWidth
              rows={3}
              variant="standard"
              {...register("observacoes")}
            />
          </Box>
        </form>
      </FormContent>
    </Container>
  );
}
