# D3 JavaScript visualisation in a Python Jupyter notebook

A [Living with Machines](http://livingwithmachines.ac.uk/) repository for code underlying [a blogpost about how to put a D3 JavaScript visualisation in a Python Jupyter notebook](http://livingwithmachines.ac.uk/d3-javascript-visualisation-in-a-python-jupyter-notebook/). The blogpost text is duplicated in `blogpost.md`.

Try the notebook live on myBinder.org: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/Living-with-machines/D3_JS_viz_in_a_Python_Jupyter_notebook/main?filepath=D3_JS_viz_in_a_Python_Jupyter_notebook.ipynb)

## Setting up

Clone the repository:

```sh
$ git clone https://github.com/Living-with-machines/D3_JS_viz_in_a_Python_Jupyter_notebook
...
```

Navigate into the directory:

```sh
$ cd D3_JS_viz_in_a_Python_Jupyter_notebook
```

Set up all the dependencies:

```sh
$ conda create --name d3forJupyter --file requirements.txt
...
```

Activate the environment:

```sh
$ conda activate d3forJupyter
```

Set up a kernel for Jupyter:

```sh
$ python -m ipykernel install --user --name=d3forJupyter
Installed kernelspec d3forJupyter in <path>
```

Start up Jupyter notebook:

```sh
$ jupyter notebook
[I 17:36:30.869 NotebookApp] Serving notebooks from local directory: <path>
...
```

Now you should be able to open up the notebook in this repository, `D3_JS_viz_in_a_Python_Jupyter_notebook.ipynb` and try it out for yourself.
