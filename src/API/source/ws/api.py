def main():
    print("[PYTHON]: Starting python services (WebSocket API).");
    from src.API.source.ws.source.start import start
    print("[PYTHON]: Imported API.source.ws.source.start");
    start()