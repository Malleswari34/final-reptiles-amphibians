from django.apps import AppConfig


class UsersConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'users'

    def ready(self):
        # Import inside ready to avoid AppRegistryNotReady early imports
        from .views import ModelCache
        import threading
        
        # Load models in a background thread so Django starts quickly
        def load_models():
            print("🕒 Starting background model pre-loading...")
            ModelCache.get_inet_model()
            ModelCache.get_custom_model()
            print("✅ Background model pre-loading complete.")

        threading.Thread(target=load_models, daemon=True).start()
