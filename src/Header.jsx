
const Header = ({ setSearch }) => {
    return (
        <>
            <header style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2) ", width: "100%" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: "0 40px " }}>
                    <h1>Products</h1>
                    <div onChange={(e) => setSearch(e.target.value)} style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2", width: "400px", height: "40px", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: "20px" }}>
                        <input type="text" placeholder="Search Products" style={{ outline: "none", border: "none", width: "80%" }} />
                    </div>
                    <p><span>Dark Theme</span></p>
                </div>
            </header>
        </>
    )
}

export default Header
