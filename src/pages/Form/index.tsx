import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import {
  Box,
  InputAdornment,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import { Container, FormContent, FormHeader } from "./styles";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";

export function Form() {
  const { register, handleSubmit } = useForm();
  const [property, setProperty] = useState("");
  const [laboratory, setLaboratory] = useState("");

  const handleChangeProperty = (event: SelectChangeEvent) => {
    setProperty(event.target.value);
  };

  const handleChangeLaboratory = (event: SelectChangeEvent) => {
    setLaboratory(event.target.value);
  };

  async function handleSubmitForm(data: any): Promise<void> {
    try {
      const response = await api.post("posts", {
        ...data,
        dataInicial: new Date(data.dataInicial).toISOString(),
        dataFinal: new Date(data.dataFinal).toISOString(),
        infosPropriedades: {
          id: 12345,
          nome: property,
        },
        cnpj: "fgsdsfdsfs",
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
              label="Nome *"
              variant="standard"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">0/40</InputAdornment>
                ),
              }}
              sx={{ width: "576px" }}
              {...register("nome")}
            />

            <TextField
              id="standard-date"
              label="Data inicial *"
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
              label="Data final *"
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
              <InputLabel id="demo-simple-select-standard-label">
                Propriedades *
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={property}
                onChange={handleChangeProperty}
                label="Age"
              >
                <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem>
                <MenuItem value="Agrotis 1">Agrotis 1</MenuItem>

                <MenuItem value="Agrotis 2">Agrotis 2</MenuItem>
                <MenuItem value="Agrotis 3">Agrotis 3</MenuItem>
                <MenuItem value="Agrotis 4">Agrotis 4</MenuItem>
                <MenuItem value="Agrotis 5">Agrotis 5</MenuItem>
              </Select>
            </FormControl>

            <FormControl
              variant="standard"
              sx={{ width: "563px", marginLeft: "5px" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Laboratório *
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={laboratory}
                onChange={handleChangeLaboratory}
                label="Age"
              >
                <MenuItem value="">
                  <em>Nenhum</em>
                </MenuItem>

                <MenuItem value="Agro Skynet">Agro Skynet</MenuItem>
                <MenuItem value="Umbrella Agro">Umbrella Agro</MenuItem>
                <MenuItem value="Osborn Agro">Osborn Agro</MenuItem>
                <MenuItem value="Skyrim Agro">Skyrim Agro</MenuItem>
                <MenuItem value="Agro Brasil">Agro Brasil</MenuItem>
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
