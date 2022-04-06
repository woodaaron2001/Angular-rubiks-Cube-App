package main

import (
	"encoding/json"
	"net/http"
)

type Algorithm struct {
	Id         int    `json:"id"`
	Name       string `json:"name"`
	Moves      string `json:"moves"`
	VideoId    string `json:"videoid"`
	VideoStart int    `json:"videostart"`
	VideoEnd   int    `json:"videoend"`
	ShortNote  string `json:"shortnote"`
}

type algorithmHandlers struct {
	store map[string]Algorithm
}

func (h *algorithmHandlers) algorithm(w http.ResponseWriter, r *http.Request) {

	switch r.Method {
	case "GET":
		h.get(w, r)
		return
	case "POST":
		h.post(w, r)
		return
	default:
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write([]byte("method not allowed"))
		return
	}
}

func (h *algorithmHandlers) post(w http.ResponseWriter, r *http.Request) {
}

func (h *algorithmHandlers) get(w http.ResponseWriter, r *http.Request) {
	algorithms := make([]Algorithm, len(h.store))

	i := 0
	for _, algorithm := range h.store {
		algorithms[i] = algorithm
		i++
	}

	jsonBytes, err := json.Marshal(algorithms)

	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	}
	w.Header().Add("content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func newAlgorithmHandlers() *algorithmHandlers {
	return &algorithmHandlers{
		store: map[string]Algorithm{
			"id1": Algorithm{
				Id:         1,
				Name:       "JPerm",
				Moves:      "RuRRuru",
				VideoId:    "dQw4w9WgXcQ",
				VideoStart: 0,
				VideoEnd:   50,
				ShortNote:  "This is a test algorithm",
			},
		},
	}
}

func main() {
	algorithmHandlers := newAlgorithmHandlers()
	http.HandleFunc("/coasters", algorithmHandlers.algorithm)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		panic(err)
	}
}
