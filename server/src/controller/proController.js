import Products from "../model/proShcema.js"

export const get_n = (req, res) => {
    res.send('Hello Worldasddsasd!')
}

export const get_pro = async (req, res) => {
    try {
        const data = await Products.find({})
        res.status(200).send({ message: "sucsess GET", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess GET" })
    }
}

export const post_pro = async (req, res) => {
    try {
        const data = new Products(req.body)
        await data.save()

        res.status(200).send({ message: "sucsess POST", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess POST" })
    }
}

export const del_pro = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Products.findByIdAndDelete(id)
        res.status(200).send({ message: "sucsess DELETE", data })
    } catch (error) {
        res.status(500).send({ message: "NOT sucsess DELETE" })
    }
}
