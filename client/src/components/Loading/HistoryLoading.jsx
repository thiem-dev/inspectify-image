const PageLoading = () => {
    return (
        <div className="loading-ctn container">
            <h1>Loading Content</h1>
            <div className="flex flex-col gap-4 w-52">
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
                <div className="skeleton w-[400px] h-[250px] rounded-2xl"></div>
            </div>
        </div>

    )
}

export default PageLoading